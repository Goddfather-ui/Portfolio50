

export default function Cards({ icon, title, description, button }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
      {icon}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex justify-end">
        <a
          href={button?.href ?? '#'}
          className={`${button?.color ?? 'text-blue-600'} font-medium inline-flex items-center hover:underline`}
        >
          {button?.text ?? 'Learn more'}
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
}