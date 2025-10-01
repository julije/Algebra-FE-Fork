export default function UserFunction({ ime, years }) {
  const { ime, years } = props;
  // da nisam ovaj const napisao morao bih props.ime pisat u onoj zagradi linija 6
  return (
    <p>
      Pozdrav, moje ime je {ime} i imam {years} godina.
    </p>
  );
}
