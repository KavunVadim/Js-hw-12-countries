import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial';
import PNotify from 'pnotify/dist/es/PNotify';

export default function setPNotifySettings() {
    PNotify.notice({
        text: 'Too many matches found. Please enter a more specific query!',
        styling: 'material',
        icons: 'material',
        icon: true,
        modules: {
            Animate: {
                animate: true,
                inClass: 'rotateInDownLeft',
                outClass: 'rotateOutUpRight',
            },
        },
    });
}