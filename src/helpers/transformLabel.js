export function transformLabel(value) {
  switch (value) {
    case 'lecture':
      return 'Лекции';
    case 'practice':
      return 'Практики';
    case 'laboratory':
      return 'Лабораторные';
    case 'consultation':
      return 'Консультации';
    case 'ekzam':
      return 'Экзамены';
    case 'view':
      return 'Просмотр';
    case 'difZach':
      return 'Диф.зачёты';
    case 'zach':
      return 'Зачёты';
    case 'rgr':
      return 'РГР';
    case 'rukPractice':
      return 'Рук.практикой';
    case 'coursRab':
      return 'Курс.работы';
    case 'coursProj':
      return 'Курс.проекты';
    case 'contrRab':
      return 'Контр.работы';
    case 'diplomProekt':
      return 'Диплом.проекты';
    case 'gek':
      return 'ГЭК';
    case 'otherRab':
      return 'Прочие работы';
    default:
      return;
  }
}
