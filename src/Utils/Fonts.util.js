import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FontAwesome from '@fortawesome/fontawesome';
import free from '@fortawesome/fontawesome-free';
import pro from '@fortawesome/fontawesome-pro';
import { fab as fabFree } from '@fortawesome/free-brands-svg-icons';
import { far as farFree } from '@fortawesome/free-regular-svg-icons';
import { fas as fasFree } from '@fortawesome/free-solid-svg-icons';
import { fal as falPro } from '@fortawesome/pro-light-svg-icons';
import { far as farPro } from '@fortawesome/pro-regular-svg-icons';
import { fas as fasPro } from '@fortawesome/pro-solid-svg-icons';

// TODO: REMOVE PACKAGES THAT WE DON'T USE, AND KEEP IMPORT ICONS THAT WE NEED
FontAwesome.library.add(fabFree, fasFree, farFree, fasPro, falPro, farPro, pro, free);

export default {
    FA: (props) => (<FontAwesomeIcon {...props} />),
};
