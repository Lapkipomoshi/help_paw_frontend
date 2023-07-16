import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import ShelterCard from './ShelterCard';

describe('ShelterCard', () => {
  const mockProps = {
    id: '1',
    name: 'Test Shelter',
    address: 'Test Address',
    workingFromHour: '09:00',
    workingToHour: '18:00',
    logo: 'logo.jpg',
    profileImage: 'image.jpg',
  };

  const { workingFromHour, workingToHour } = mockProps;

  it('renders correctly with the provided props', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <ShelterCard {...mockProps} />
      </Router>
    );

    expect(getByText(mockProps.name)).toBeInTheDocument();
    expect(getByText(mockProps.address)).toBeInTheDocument();
    expect(getByAltText('фото').getAttribute('src')).toBe(mockProps.profileImage);
    expect(getByAltText('логотип').getAttribute('src')).toBe(mockProps.logo);

    const workingHoursElement = getByText('Часы работы:');
    expect(workingHoursElement).toBeInTheDocument();

    const workingHoursText = getByText(new RegExp(`${workingFromHour} - ${workingToHour}`));
    expect(workingHoursText).toBeInTheDocument();
  });

  it('renders a link with the correct route', () => {
    const { container } = render(
      <Router>
        <ShelterCard {...mockProps} />
      </Router>
    );
    const linkElement = container.querySelector('a');

    expect(linkElement).toHaveAttribute('href', `/shelters/${mockProps.id}/about`);
  });
});
