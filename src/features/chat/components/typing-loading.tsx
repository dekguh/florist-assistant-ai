import classNames from 'classnames'

const TypingLoading = () => {
  return (
    <div className='flex flex-row flex-nowrap gap-0.5 w-fit'>
      <div
        className={classNames(
          'rounded-full bg-violet-400 h-1.5 w-1.5 animate-bounce',
        )}
      />

      <div
        className={classNames(
          'rounded-full bg-violet-400 h-1.5 w-1.5 animate-bounce',
        )}
      />

      <div
        className={classNames(
          'rounded-full bg-violet-400 h-1.5 w-1.5 animate-bounce',
        )}
      />
    </div>
  )
}

export default TypingLoading