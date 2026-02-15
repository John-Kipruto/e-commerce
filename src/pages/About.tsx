export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="font-display text-3xl font-bold text-ink-950">
        About Us
      </h1>
      <div className="mt-8 prose prose-stone max-w-none">
        <p className="text-stone-600 leading-relaxed">
          We’re an electronics store built around one idea: bring you quality gear
          at fair prices, with service you can rely on. Whether you need audio,
          peripherals, or everyday tech, we curate products we’d use ourselves.
        </p>
        <h2 className="font-display text-xl font-semibold text-ink-950 mt-10 mb-3">
          What we stand for
        </h2>
        <ul className="list-disc pl-6 text-stone-600 space-y-2">
          <li><strong className="text-ink-900">Quality first</strong> — Every product is tested and backed by our 2-year warranty.</li>
          <li><strong className="text-ink-900">Honest pricing</strong> — No hidden fees. What you see is what you pay.</li>
          <li><strong className="text-ink-900">Fast shipping</strong> — Orders ship within 24 hours. Free delivery on orders over $99.</li>
          <li><strong className="text-ink-900">Support when you need it</strong> — Our team is here to help before and after you buy.</li>
        </ul>
        <h2 className="font-display text-xl font-semibold text-ink-950 mt-10 mb-3">
          Get in touch
        </h2>
        <p className="text-stone-600 leading-relaxed">
          Questions or feedback? Email us at{' '}
          <a href="mailto:support@example.com" className="text-brand-600 hover:text-brand-700 font-medium">
            support@example.com
          </a>
          . We usually reply within one business day.
        </p>
      </div>
    </div>
  )
}
