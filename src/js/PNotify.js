import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial';
import PNotify from 'pnotify/dist/es/PNotify';

export default function setPNotifySettings() {
    PNotify.defaults.styling = 'material';
    PNotify.error({
        text: 'Too many matches found. Please enter a more specific query!',
        modules: {
            Animate: {
                animate: true,
                inClass: 'zoomInLeft',
                outClass: 'zoomOutRight',
            },
        },
    });
}