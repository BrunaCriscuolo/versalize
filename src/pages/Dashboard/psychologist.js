
import { Dashboard } from '../../templates/Dashboard/dashboard';

import { columnsPsychologist, dataSourcePsychologist } from './data';

const grid = {
  gutter: 32,
  span1: 16,
  span2: 8,
  spanInput: 24
};

const data = {
  titleCalendar: 'Cronograma de consulta',
  titleTable: 'Meus pacientes',
};

const date = {
  appointments: [
    { startDate: '2021-08-26T09:45', endDate: '2021-08-26T11:00', title: 'Meeting' },
    { startDate: '2021-08-26T12:00', endDate: '2021-08-26T13:30', title: 'Go to a gym' }
  ],
  onCommitChanges: () => { }
};

const DashboardPsychologist = () => (
  <Dashboard grid={grid} data={data} columns={columnsPsychologist} dataSource={dataSourcePsychologist} date={date} />
);
export default DashboardPsychologist;
