export const tableHeaders = [
  {
    headerName: 'Действия',
    field: 'actions',
    cellRenderer: 'modalButtonCellRenderer',
    cellRendererParams: {
      onClick: (params) => params.node.setDataValue('data', params.data),
    },
  },
  { field: 'numberPlan', headerName: '№ плана' },
  { field: 'numberSemestr', headerName: 'Семестр' },
  { field: 'studyForm', headerName: 'Форма обучения' },
  { field: 'idGroup', headerName: 'Группа' },
  {
    field: 'numberFlow',
    headerName: '№ потока',
    type: 'editableColumn',
    cellEditor: 'cellEditor',
    // cellEditorPopup: true,
  },
  { field: 'idSubject', headerName: 'Дисциплина' },
  {
    field: 'idDepartment',
    headerName: 'Кафедра',
    type: 'editableColumn',
    cellEditor: 'agRichSelectCellEditor',
    cellEditorPopup: true,
    cellEditorParams: {
      values: ['ИСИТ', 'АПП'],
      cellEditorPopup: true,
    },
  },
  { field: 'idSpeciality', headerName: 'Специальность' },
  { field: 'course', headerName: 'Курс' },
  { field: 'countStudenty', headerName: 'Студентов' },
  { field: 'countPodgroup', headerName: 'Количество подгрупп' },
  { field: 'lecture', headerName: 'Лекции' },
  { field: 'practice', headerName: 'Практики' },
  { field: 'laboratory', headerName: 'Лабораторные' },
  { field: 'consultation', headerName: 'Консультации' },
  { field: 'ekzam', headerName: 'Экзамены' },
  { field: 'view', headerName: 'Просмотр' },
  { field: 'difZach', headerName: 'Диф.зачёт' },
  { field: 'zach', headerName: 'Зачёт' },
  { field: 'rgr', headerName: 'РГР' },
  { field: 'rukPractice', headerName: 'Руководство практикой' },
  { field: 'coursRab', headerName: 'Курсовая работа' },
  { field: 'coursProj', headerName: 'Курсовой проект' },
  { field: 'contrRab', headerName: 'Контр. раб.' },
  { field: 'diplomProekt', headerName: 'Дипломное проектирование' },
  { field: 'gek', headerName: 'ГЭК' },
  { field: 'otherRab', headerName: 'Прочие работы' },
];

// export const fakeRowData = [
//   {
//     planNumber: 21,
//     semesterNumber: 3,
//     educationForm: 'Дневная',
//     group: 'Ит-5',
//     flowNumber: 2,
//     cathedra: null,
//     subject:
//       'Базы знаний и поддержка принятия решений в системах автоматизированного проектирования',
//     specialtyId: '1-40 05 01-01',
//     course: 2,
//     studentsCounter: 28,
//     subgroupNumber: 2,
//     lectures: 32,
//     practices: null,
//     labs: 64,
//     consultation: 5.23,
//     exams: null,
//     view: null,
//     diffOffset: null,
//     offset: 7.25,
//     rgr: null,
//     practiceGuidance: null,
//     courseWork: null,
//     courseProject: null,
//     controlWork: null,
//     diplomaDesign: null,
//     gek: null,
//     otherWork: null,
//   },
//   {
//     id: 2,
//     planNumber: 21,
//     semesterNumber: 3,
//     educationForm: 'Дневная',
//     group: 'Ит-10',
//     flowNumber: 2,
//     cathedra: null,
//     subject:
//       'Базы знаний и поддержка принятия решений в системах автоматизированного проектирования',
//     specialtyId: '1-40 05 01-01',
//     course: 2,
//     studentsCounter: 28,
//     subgroupNumber: 2,
//     lectures: 32,
//     practices: null,
//     labs: 64,
//     consultation: 5.23,
//     exams: null,
//     view: null,
//     diffOffset: null,
//     offset: 7.25,
//     rgr: null,
//     practiceGuidance: null,
//     courseWork: null,
//     courseProject: null,
//     controlWork: null,
//     diplomaDesign: null,
//     gek: null,
//     otherWork: null,
//   },
// ];
