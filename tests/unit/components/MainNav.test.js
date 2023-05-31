import { render, screen } from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav);
    const companyName = screen.getByText('T-Gun Careers');
    expect(companyName).toBeInTheDocument();
  });

  it('should display menu items for navigation', () => {
    render(MainNav);
    const menuItems = screen.getAllByRole('listitem');
    const menuTexts = menuItems.map((item) => item.textContent);
    expect(menuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at T-Gun Careers',
      'How we hire',
      'Students',
      'Jobs'
    ]);
  });
});
