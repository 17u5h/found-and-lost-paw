import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle', () => {
    componentRender(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
  });
});
