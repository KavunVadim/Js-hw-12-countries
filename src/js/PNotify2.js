import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial';
import PNotify from 'pnotify/dist/es/PNotify';

export default function setPNotifySettings1() {
    PNotify.error({
        text: 'Что-то не так, попробуйте еще раз!',
        styling: 'material',
        icons: 'material',
        modules: {
            Animate: {
                animate: true,
                inClass: 'rotateInDownLeft',
                outClass: 'rotateOutUpRight',
            },
        },
    });
}