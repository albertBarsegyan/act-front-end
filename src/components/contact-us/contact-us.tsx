'use client';

import { useState } from 'react';

import { Input } from '@/components/common/input/input';
import { SectionLayout } from '@/components/layout/section-layout/section-layout';
import { AboutUsIllustration } from '@/icons/about-us-illustration';

export function ContactUs() {
  const [value, setValue] = useState('');

  return (
    <div className="bg-blue-dark-1 py-5">
      <SectionLayout>
        <div className="h-full border-2 border-blue-dark-1 bg-white p-5 ">
          <div className="flex h-full">
            <div className="w-1/2">
              <span className="mb-8 block text-6xl font-bold not-italic text-blue-dark-1">Contact us</span>
              <p className="mb-8 text-lg text-blue-dark-1">
                Let's build a friendly and collaborative atmosphere together, where we all strive for excellence in
                software development!
              </p>
              <AboutUsIllustration />
            </div>
            <div className="h-full w-1/2 ">
              <div className="h-full border-2 border-blue-dark-1 p-5">
                <span className="mb-2 block text-3xl font-bold text-blue-dark-1">Get In Touch</span>
                <p className="text-blue-dark-1">Tell us about your project needs!</p>
                {/*<ContactUsForm />*/}
                <div>
                  <Input value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <span>2024 © YACKO - ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
