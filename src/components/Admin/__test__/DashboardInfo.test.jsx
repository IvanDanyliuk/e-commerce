import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import DashboardInfo from '../DasboardInfo';
import MockAdapter from 'axios-mock-adapter';
import { userRequest } from '../../../requestMethods';
import { act } from "react-dom/test-utils";

const dataMock = [
  {_id: 12, total: 50},
  {_id: 1, total: 100},
];

describe('DashboardInfo component tests', () => {
  let mockedUserRequest;
  beforeEach(() => {
    mockedUserRequest = new MockAdapter(userRequest);
  });
  afterEach(() => {
    mockedUserRequest.reset();
  });

  it('should render the DashboardInfo component with successful request to API', async () => {
    mockedUserRequest.onGet('orders/income').reply(200, dataMock);
    await act(() => {
      render(
        <DashboardInfo />
      );
    });
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('should render the DashboardInfo component with failed request to API', async () => {
    mockedUserRequest.onGet('orders/income').networkErrorOnce();
    await act(() => {
      render(
        <DashboardInfo />
      );
    });
    expect(screen.queryByText('100%')).not.toBeInTheDocument();
  });
});
