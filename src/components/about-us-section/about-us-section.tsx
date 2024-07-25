'use client';

import { AboutUsDataList } from '@/components/about-us-section/constants';
import { InfoWithDesc } from '@/components/common/info-with-desc/info-with-desc';
import { SectionLayout } from '@/components/layout/section/section-layout';

export function AboutUsSection() {
  return (
    <div id="aboutSection" className="bg-violet-light-2">
      <SectionLayout>
        <div className="p my-24 border-2 border-blue-dark-1 bg-white">
          <h3 className="border-b-2 border-b-blue-dark-1 py-4 text-center text-8xl font-bold not-italic text-blue-dark-1">
            About YACKO
          </h3>

          <div className="flex gap-x-10 p-5">
            <div className="w-full border-r  border-r-blue-dark-1 md:w-1/2">
              <div>
                <span className="mb-5 block text-7xl font-bold not-italic text-blue-dark-1">Design. Think.</span>
                <span className="block text-7xl font-bold not-italic text-blue-dark-1">Solve. Develop.</span>
                <p className="mt-5 text-lg font-normal not-italic text-blue-dark-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel
                  aliquam sit vulputate.
                </p>
                <p className="max-w mt-5 text-lg font-normal not-italic text-blue-dark-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel
                  aliquam sit vulputate.{' '}
                </p>
              </div>
            </div>

            <div className="grid w-full grid-cols-2 gap-10 md:w-1/2">
              {AboutUsDataList.map((aboutUsData) => (
                <InfoWithDesc key={aboutUsData.id} data={aboutUsData} />
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
