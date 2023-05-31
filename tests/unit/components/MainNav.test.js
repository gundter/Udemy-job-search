import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
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

  describe('When the user logs in', () => {
    it('displays user profile image', async () => {
      render(MainNav);

      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      });
      expect(profileImage).not.toBeInTheDocument();

      let logInButton = screen.queryByRole('button', {
        name: /sign in/i
      });
      expect(logInButton).toBeInTheDocument();

      await userEvent.click(logInButton);

      profileImage = screen.getByRole('img', {
        name: /user profile image/i
      });
      logInButton = screen.queryByRole('button', {
        name: /sign in/i
      });

      expect(profileImage).toBeInTheDocument();
      expect(logInButton).not.toBeInTheDocument();
    });
  });
});
