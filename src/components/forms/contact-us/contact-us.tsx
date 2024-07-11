import { Input } from '@/components/common/input/input';

export function ContactUsForm() {
  return (
    <div>
      <div>
        <div>
          <Input placeholder="Enter your first name" value="" onChange={() => {}} />
          <Input placeholder="Enter your last name" value="" onChange={() => {}} />
        </div>
        <Input value="Enter your email address" onChange={() => {}} />
        <textarea placeholder="Enter your message" value="" onChange={() => {}} />
      </div>
    </div>
  );
}
