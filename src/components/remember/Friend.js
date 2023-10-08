import React from 'react'
import Layout from './Layout';

function Friend() {

    return (
    <div>
<Layout> 
    <div className='flex items-center justify-center p-6 pt-10' >
<table className="table-auto  border border-slate-400">
  <thead className='bg-gray-200'>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody >
    <tr className='border border-gray-400'>
      <td className='border border-gray-400'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
</div>
</Layout>
        
    </div>
  );

  };


export default Friend;

