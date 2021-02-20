/* global global */
import axios from 'axios';
import { defer } from 'rxjs/observable/defer';
import { from } from 'rxjs/observable/from';
import { map, tap } from 'rxjs/operators';
import { fileUtil } from '~/Utils';
import { Routes } from '~/Constants';

const deferUntilSubscribed =
          (obsFactory) =>
              defer(obsFactory)
                  .pipe(
                      map(({ data }) => data),
                      tap({
                          error(error) {
                              // eslint-disable-next-line no-underscore-dangle
                              if (!global.__TEST__) {
                                  // eslint-disable-next-line no-console
                                  console.error(error);
                              }
                          },
                      }),
                  );

const Axios = (() => {
    const axiosInstance = axios.create(
        {
            // baseURL:          Config.API.endPoint,
            timeout:          10000,
            transformRequest: (data) => {
                if (data && !(data instanceof FormData)) {
                    const requestPayload = new FormData();

                    Object.entries(data).map((param) => requestPayload.set(param[0], param[1]));

                    return requestPayload;
                }
                return data;
            },
        },
    );

    const get$ = (...args) =>
        deferUntilSubscribed(() => from(axiosInstance.get(...args)));

    const post$ = (...args) =>
        deferUntilSubscribed(() => from(axiosInstance.post(...args)));

    const put$ = (...args) =>
        deferUntilSubscribed(() => from(axiosInstance.put(...args)));

    const patch$ = (...args) =>
        deferUntilSubscribed(() => from(axiosInstance.patch(...args)));

    return {
        get$,
        post$,
        put$,
        patch$,
    };
})();

export default {
    uploadFiles(files, { uploadType }) {
        return Axios.post$(
            Routes.EndPoints.UploadFiles,
            fileUtil.constructUploadFileMsg({ files, uploadType }),
        );
    },
};

