
import { ViewState, IntegratedEditing, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler as S,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider
} from '@devexpress/dx-react-scheduler-material-ui';

export const Scheduler = ({ date: { appointments, onCommitChanges } }) => (
  <S data={appointments} height={500}>
    <ViewState
      defaultCurrentDate={new Date()}
    />
    <EditingState onCommitChanges={onCommitChanges} />
    <IntegratedEditing />
    <DayView />
    <WeekView />
    <MonthView />
    <Toolbar />
    <DateNavigator />
    <ViewSwitcher />
    <Appointments />
    <AppointmentTooltip
      showCloseButton
      showOpenButton
      showDeleteButton
    />
    <AppointmentForm
    />
    <DragDropProvider />
  </S>
);
