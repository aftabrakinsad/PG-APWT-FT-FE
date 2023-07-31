import { useRouter } from "next/router"
import { useSearchParams } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const param = useSearchParams()
    const { id } = router.query
    return (
        <div>
            <h1>Find ID By Router: {id}</h1>
            <h1>Find ID By Param: {param.get('id')}</h1>
        </div>
    )
}