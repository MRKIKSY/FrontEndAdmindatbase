function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path='/' element={
            <RequireToken>
              <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/employee' element={<Employee />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/create' element={<AddEmployee />} />
                <Route path='/employeeedit/:id' element={<EditEmployee />} />
              </Routes>
            </RequireToken>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
