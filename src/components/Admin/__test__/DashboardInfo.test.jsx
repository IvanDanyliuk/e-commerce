import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import DashboardInfo from '../DasboardInfo';
import MockAdapter from 'axios-mock-adapter';
import { userRequest } from '../../../requestMethods';



describe('DashboardInfo component tests', () => {
  it('should render the DashboardInfo component', () => {
    render(
      <DashboardInfo />
    );
    screen.debug()
    // expect(mock).toHaveBeenCalled();
  });
});
