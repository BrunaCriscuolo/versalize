
import { Dashboard } from '../../templates/Dashboard/dashboard';

import { columnsPatient, dataSourcePatient } from './data';

const grid = {
  gutter: 0,
  span1: 24,
  span2: 24,
  spanInput: 8
};

const data = {
  titleCalendar: 'Cronograma de consulta',
  titleTable: 'Meu pacote de serviço',
};

const date = {
  appointments: [
    { startDate: '2021-08-26T09:45', endDate: '2021-08-26T11:00', title: 'Meeting' },
    { startDate: '2021-08-26T12:00', endDate: '2021-08-26T13:30', title: 'Go to a gym' }
  ],
  onCommitChanges: () => { }
};


const DashboardPsychologist = () => (
  <Dashboard grid={grid} data={data} columns={columnsPatient} dataSource={dataSourcePatient} date={date} />
);
export default DashboardPsychologist;
