export const Text = ({ style, text }) => {
  return (
    <p className={style ? style : 'mt-6 text-base leading-7 text-gray-600'}>
      {text}
    </p>
  )
}
