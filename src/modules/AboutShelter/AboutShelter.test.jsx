// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import * as RRD from 'react-router-dom';
// import AboutShelter from './AboutShelter';

// const mockData = {
//   shelter: {
//     name: 'Название приюта',
//     logo: 'путь/к/логотипу',
//     address: 'Адрес приюта',
//     working_from_hour: '09:00',
//     working_to_hour: '17:00',
//     phone_number: '123-456-7890',
//     email: 'example@example.com',
//     web_site: 'https://www.example.com',
//     vk_page: 'https://vk.com/example',
//     ok_page: 'https://ok.ru/example',
//     telegram: 'https://t.me/example',
//     description: 'Описание приюта',
//     money_collected: '100000 руб.',
//     animals_adopted: '50',
//   },
//   isOwner: true,
//   isLoading: false,
// };

// jest.mock('../../images/EditPenIcon/EditPenIcon', () => {
//   return function EditPenIcon() {
//     return <div data-testid='edit-icon' />;
//   };
// });

// jest.mock('../../modules/ShelterOwnerStatistics/ShelterOwnerStatistics', () => {
//   return function ShelterOwnerStatistics() {
//     return <div data-testid='metrics-overview' />;
//   };
// });

// jest.mock('react-router-dom', () => {
//   const actualModule = jest.requireActual('react-router-dom');
//   return {
//     ...actualModule,
//     useOutletContext: jest.fn(() => {
//       return { ...mockData };
//     }),
//   };
// });

// describe('AboutShelter', () => {
//   it('does not render owner functionality when member is not owner', () => {
//     jest.spyOn(RRD, 'useOutletContext').mockReturnValue({ ...mockData, isOwner: false });

//     const { queryByText, queryByTestId } = render(
//       <RRD.MemoryRouter initialEntries={['/']}>
//         <AboutShelter />
//       </RRD.MemoryRouter>
//     );

//     const shelterOwnerStatistics = queryByText('Количество питомцев: ');
//     const deleteLink = queryByTestId('edit-icon');

//     expect(deleteLink).toBeNull();
//     expect(shelterOwnerStatistics).toBeNull();
//   });

//   it('renders owners functionality when member is owner', () => {
//     jest.spyOn(RRD, 'useOutletContext').mockReturnValue({ ...mockData });

//     render(
//       <RRD.MemoryRouter initialEntries={['/']}>
//         <AboutShelter />
//       </RRD.MemoryRouter>
//     );

//     expect(screen.getByTestId('edit-icon')).toBeInTheDocument();
//     expect(screen.getByTestId('metrics-overview')).toBeInTheDocument();
//   });

//   it('should renders correctly with provided data', () => {
//     jest.spyOn(RRD, 'useOutletContext').mockReturnValue({ ...mockData });

//     render(
//       <RRD.MemoryRouter initialEntries={['/']}>
//         <AboutShelter />
//       </RRD.MemoryRouter>
//     );

//     expect(screen.getByText('Название приюта')).toBeInTheDocument();
//     expect(screen.getByText('Адрес приюта')).toBeInTheDocument();
//     expect(screen.getByText('123-456-7890')).toBeInTheDocument();
//     expect(screen.getByText('example@example.com')).toBeInTheDocument();
//     expect(screen.getByAltText('вконтакте')).toBeInTheDocument();
//     expect(screen.getByAltText('одноклассники')).toBeInTheDocument();
//     expect(screen.getByAltText('телеграм')).toBeInTheDocument();
//   });

//   it('should not render when data is not load', () => {
//     jest.spyOn(RRD, 'useOutletContext').mockReturnValue({ ...mockData, isLoading: true });

//     const { container } = render(
//       <RRD.MemoryRouter initialEntries={['/']}>
//         <AboutShelter />
//       </RRD.MemoryRouter>
//     );

//     expect(container.firstChild).toBeNull();
//   });
// });
