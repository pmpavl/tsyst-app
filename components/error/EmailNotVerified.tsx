export default function ErrorEmailNotVerified(): JSX.Element {
  return (
    <div className='alert alert-error max-w-fit shadow-lg'>
      <span className='text-center'>
        Этот email не подтвержден. Пожалуйста, проверьте почту, возможно письмо упало в спам 😞
      </span>
    </div>
  );
}
