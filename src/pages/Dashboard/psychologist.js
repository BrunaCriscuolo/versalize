
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

const DashboardPsychologist = () => (
  <Dashboard grid={grid} data={data} columns={columnsPsychologist} dataSource={dataSourcePsychologist} />
);
export default DashboardPsychologist;
