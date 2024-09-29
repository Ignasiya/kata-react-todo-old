const SearchPanel = () => {
  const searchText = 'Type here to search'
  const searchStyle = {
    fontSize: '20px',
    marginBottom: '10px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  }
  return <input type='text' className='form-control search-input' placeholder={searchText} />
}

export default SearchPanel
