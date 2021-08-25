import { Calendar as C } from './styles';

export const Calendar = ({ dateCellRender, monthCellRender }) => (
  <C dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
);
