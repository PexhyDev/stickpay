type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <figure className="rounded-lg bg-primary p-8 text-white">
      <blockquote className="text-xl font-semibold leading-8">“{quote}”</blockquote>
      <figcaption className="mt-8">
        <div className="font-bold">{author}</div>
        <div className="text-sm text-slate-300">{role}</div>
      </figcaption>
    </figure>
  );
}
