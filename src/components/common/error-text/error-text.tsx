import classNames from 'classnames';

export function ErrorText({ errorMessage }: { errorMessage: string }) {
  return (
    <p
      className={classNames('mt-2 h-0 rounded-3xl bg-white text-red-500 duration-75', {
        ['h-auto px-4 py-2']: Boolean(errorMessage),
      })}
    >
      {errorMessage}
    </p>
  );
}
