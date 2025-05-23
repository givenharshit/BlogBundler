import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { AWTAccumulator } from '../pages/AWTAccumulator.jsx';
import { AWTCounter } from '../pages/AWTCounter';
import Developer from '../pages/Developer';
import { FileHandling } from '../pages/FileHandling';


export const AppRouters = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/awtaccumulator" element={<AWTAccumulator />} />
        <Route path="/awtcountor" element={<AWTCounter />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/filehandling" element={<FileHandling />} />
      </Routes>
    </Router>
  );
};