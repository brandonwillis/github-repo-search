import React from 'react'
import { render, cleanup, fireEvent, act } from '@testing-library/react'
import { SearchProvider } from './SearchContext'
import Header from '../components/Header/Header';
import SearchContainer from '../containers/SearchContainer/SearchContainer';

afterEach(cleanup);

beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.spyOn(window, 'fetch')
})

test('Repositories are displayed after input is updated', async () => {
    const { getByLabelText, findByText, getAllByRole } = render(
        <SearchProvider>
            <Header />
            <SearchContainer />
        </SearchProvider>
    );

    window.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => [{ id: 1, name: 'Testing', stargazers_count: 1 }, { id: 2, name: 'React', stargazers_count: 1000 }]
    })

    const searchInput = getByLabelText('search-input');
    const inputValue = 'Facebook';

    fireEvent.change(searchInput, { target: { value: inputValue } })
    act(() => { jest.runAllTimers() });

    expect(window.fetch).toHaveBeenCalledTimes(1)
    expect(await findByText('Testing')).toBeInTheDocument();
    expect(await findByText('React')).toBeInTheDocument();

    const renderedRepositories = getAllByRole("listitem");
    
    expect(renderedRepositories[0]).toHaveTextContent('React');
    expect(renderedRepositories[1]).toHaveTextContent('Testing');
})

test('Error message displayed when error is received', async () => {
    const { getByLabelText, findByText } = render(
        <SearchProvider>
            <Header />
            <SearchContainer />
        </SearchProvider>
    );

    window.fetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: "Not Found" })
    })

    const searchInput = getByLabelText('search-input');
    const inputValue = 'Facebook';

    fireEvent.change(searchInput, { target: { value: inputValue } })
    act(() => { jest.runAllTimers() });

    expect(window.fetch).toHaveBeenCalledTimes(1)
    expect(await findByText(`No results found for: ${inputValue}`)).toBeInTheDocument();
})