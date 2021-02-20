import { ErrorCodes } from '~/Constants';

export default {
    constructUploadFileMsg({ files, uploadType }) {
        const formFiles = new FormData();
        files.map((file) => {
            formFiles.append('files', file, file.name);
            return null;
        });
        formFiles.append('uploadType', uploadType);
        return formFiles;
    },
    validateImageFile(files, uploadedFiles, config) {
        const { ext, maxFiles, maxSize } = config;
        const errs                       = [];
        const totalFiles                 = (uploadedFiles.length + files.length);
        if (files.length > maxFiles
            || totalFiles > maxFiles) {
            errs.push({
                search: {
                    maxFiles,
                },
                code:   ErrorCodes.Upload.MaxFiles,
            });
            if (totalFiles > maxFiles) {
                const totalRemove = (totalFiles - maxFiles);
                files.splice(0, totalRemove);
            }
        }
        files.map((file, i) => {
            if (!ext.includes(`.${file.type.split('/')[1]}`)) {
                errs.push({
                    search: {
                        type: `${file.type}`,
                        ext:  this.toFullExtensionsReadableString(ext),
                    },
                    code:   ErrorCodes.Upload.Extension,
                });
                files.splice(i, 1);
            }
            if (file.size > maxSize) {
                errs.push({
                    search: {
                        name: `${file.name}`,
                        maxSize,
                    },
                    code:   ErrorCodes.Upload.MaxSize,
                });
                files.splice(i, 1);
            }
            return undefined;
        });
        return {
            Errors:  errs,
            Files:   files,
            isError: errs.length,
        };
    },
    toFullExtensionNames: (extList) => extList.map((ext) => {
        switch (ext) {
        case '.png': {
            return 'image/png';
        }
        case '.jpg': {
            return 'image/jpg';
        }
        case '.jpeg': {
            return 'image/jpeg';
        }
        case '.gif': {
            return 'image/gif';
        }
        case '.json': {
            return 'application/json';
        }
        default: {
            return `unknown/${ext}`;
        }
        }
    }),
    toFullExtensionsNamesString(extList) {
        return this.toFullExtensionNames(extList)
            .reduce((currentStr, extension) => currentStr
                ? `${currentStr}, ${extension}`
                : extension, '');
    },
    toFullExtensionsReadableString(extList) {
        return extList.reduce((currentStr, extension) => currentStr
            ? `${currentStr}, ${extension.replace('.', '')}`
            : extension.replace('.', ''), '');
    },
    removeFile:           ({ files, uploadType, paths }) => ({
        newFiles:    files.filter((file) => !paths.includes(file.fileName)),
        deletePaths: paths,
        uploadType,
    }),
};
