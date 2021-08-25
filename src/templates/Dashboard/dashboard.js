
import { Calendar } from '../../components/atoms/Calendar/calendar';
import { Box } from '../../components/molecules/Box/box';
import { Title } from '../../components/atoms/Typography/typography';
import { Row, Col } from '../../components/atoms/Grid/grid';
import { Table } from '../../components/atoms/Table/table';
import { InputSearch } from '../../components/atoms/Input/input';

export const Dashboard = ({ grid: { gutter, span1, span2, spanInput }, data: { titleCalendar, titleTable }, columns, dataSource }) => (
  <Row gutter={[gutter]}>
    <Col span={span1}>
      <Box className='box__form'>
        <Title level={5}>{titleCalendar}</Title>
        <Calendar />
      </Box>
    </Col>
    <Col span={span2}>
      <Box className='box__form'>
        <Row justify='end'>
          <Col span={24 - spanInput}>
            <Title level={5}>{titleTable}</Title>
          </Col>
          <Col span={spanInput}>
            <InputSearch placeholder='Buscar por nome' />
          </Col>
        </Row>
        <Table columns={columns} data={dataSource} />
      </Box>
    </Col>
  </Row>
);

