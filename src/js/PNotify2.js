import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial';
import PNotify from 'pnotify/dist/es/PNotify';

export default function setPNotifySettings1() {
    PNotify.defaults.styling = 'material';
    PNotify.error({
        text: 'Что-то не так, попробуйте еще раз!',
        modules: {
            Animate: {
                animate: true,
                inClass: 'zoomInLeft',
                outClass: 'zoomOutRight',
            },
        },
    });
}