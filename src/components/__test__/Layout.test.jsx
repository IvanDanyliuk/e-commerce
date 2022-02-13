import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Layout from '../Layout';
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from '../../redux/store';

describe('Layout component tests', () => {
  it('should render the Layout component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Layout>
            <div>Content</div>
          </Layout>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
