import { TabList } from '@/utils/tabList'

const Tabs = () => {
  return (
    <div className='flex justify-between mt-4'>
      {
        TabList.map((tab, index) => (
          <span key={index}>{tab}</span>
        ))
      }
    </div>
  )
}

export default Tabs