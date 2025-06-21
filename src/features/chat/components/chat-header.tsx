import bgHeader from '@/assets/background/chat-header.svg'
import chatheaderLogo from '@/assets/logo/chat-header-logo.svg'
import classNames from 'classnames'

interface IChatHeader {
  title: string;
  description: string;
}

const ChatHeader : React.FC<IChatHeader> = ({ title, description }) => {
  return (
    <div
      className={classNames(
        'bg-cover bg-no-repeat h-[200px] bg-center px-5',
        'flex items-center rounded-tl-xl rounded-tr-xl'
      )}
      style={{
        backgroundImage: `url(${bgHeader})`
      }}
    >
      <img src={chatheaderLogo} />
      <div className='pl-7'>
        <h6 className='text-[28px] font-bold text-white'>{title}</h6>
        <p className='text-[14px] text-white leading-[1.6]'>{description}</p>
      </div>
    </div>
  )
}

export default ChatHeader