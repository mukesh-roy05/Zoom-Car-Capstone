const Spinner = () => {
  return (
    <div className="spinner">
      <div class="d-flex align-items-center">
        <div class="spinner-border me-2" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
