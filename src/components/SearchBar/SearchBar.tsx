'use client'

import { InputWrapper, ResultsCount, SearchContainer, SearchInput } from './SearchBarStyles'

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  resultsCount: number
  loading: boolean
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  resultsCount,
  loading,
}: SearchBarProps) {
  return (
    <SearchContainer>
      <InputWrapper>
        <SearchInput
          aria-label=""
          type="text"
          placeholder="Search for a smartphone..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputWrapper>
      <div aria-live="polite">
        {loading ? (
          <ResultsCount>Loading results...</ResultsCount>
        ) : (
          <ResultsCount>{resultsCount} results</ResultsCount>
        )}
      </div>
    </SearchContainer>
  )
}
