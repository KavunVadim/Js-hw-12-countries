import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial';
import PNotify from 'pnotify/dist/es/PNotify';

export default function setPNotifySettings() {
    PNotify.error({
        text: 'Too many matches found. Please enter a more specific query!',
        styling: 'material',
        icons: 'material',
        icon: true,
        modules: {
            Animate: {
                animate: true,
                inClass: 'zoomInLeft',
                outClass: 'zoomOutRight',
            },
        },
    });
}