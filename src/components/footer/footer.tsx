import { LinkedinIcon } from '@/icons/linkedin-icon';
import { LogoIcon } from '@/icons/logo.icon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-20 md:mt-20">
      <div className="border-secondary flex flex-col gap-x-4 rounded-3xl border-4 p-5 md:p-10">
        <div className="flex items-center justify-center">
          <div className="flex max-w-2xl flex-col items-center justify-center gap-y-4">
            <button type="button" className="button-reset text-secondary flex-one-line">
              <LogoIcon color="white" size={80} />
            </button>
            <div>
              <p className="text-center text-lg font-bold md:text-xl">
                Let{"'"}s build a friendly and collaborative atmosphere together, where we all strive for excellence in
                software development!
              </p>
            </div>
            <div className="flex flex-row gap-x-4">
              <a href="https://www.linkedin.com/in/albertbarsegyan/" target="_blank">
                <LinkedinIcon size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mb-4 mt-2 text-center  text-base md:mt-4 md:text-lg">
        {currentYear} © YACKO - ALL RIGHTS RESERVED{' '}
      </p>
    </div>
  );
}
