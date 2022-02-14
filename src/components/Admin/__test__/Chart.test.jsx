import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Chart from '../Chart';

const data = {
  title: 'Chart Title',
  chartData: [
    {name: 'Jan', 'Active User': 76},
    {name: 'Feb', 'Active User': 53}
  ],
  dataKey: 'data_key',
};

describe('AdminNavigation component tests', () => {
  it('should render the AdminNavigation component', () => {
    render(
      <Chart 
        title={data.title} 
        data={data.chartData} 
        dataKey={data.dataKey} 
      />
    );
    expect(screen.getByText(data.title)).toBeInTheDocument();
  });
});
