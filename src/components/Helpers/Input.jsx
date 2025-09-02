export default function Input({
  type,
  value,
  onChange,
  className,
  placeholder,
  style,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      style={style}
    />
  );
}
