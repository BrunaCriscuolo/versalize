
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

const DashboardPsychologist = () => (
  <Dashboard grid={grid} data={data} columns={columnsPatient} dataSource={dataSourcePatient} />
);
export default DashboardPsychologist;
