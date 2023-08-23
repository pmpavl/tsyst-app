import { genId, ToasterToast } from '@/components/ui/use-toast';

/** Something went wrong toast. */
const swwToast: ToasterToast = {
  id: genId(),
  variant: 'destructive',
  title: 'Что-то пошло не так!',
  description: 'Перезагрузите страницу или попробуйте позже.',
};

/** Passage already start toast. */
const pasToast: ToasterToast = {
  id: genId(),
  variant: 'destructive',
  title: 'Тест уже начался',
  description: 'У вас есть незаконченное прохождение теста, вернитесь к нему и продолжайте решать задачи.',
};

/** Passage disposable toast. */
const pdToast: ToasterToast = {
  id: genId(),
  variant: 'destructive',
  title: 'Одноразовый тест',
  description: 'Тест можно пройти только один раз.',
};

/** Passage time to repeat toast. */
const pttrToast: ToasterToast = {
  id: genId(),
  variant: 'destructive',
  title: 'Повторного прохождения',
  description: 'Не прошло необходимое время для повторного прохождения теста.',
};

/** Passage end toast. Need add action close. */
const peToast: ToasterToast = {
  id: genId(),
  variant: 'default',
  title: 'Завершить тест?',
};

export {
  swwToast,
  pasToast, pdToast, pttrToast, peToast,
};
