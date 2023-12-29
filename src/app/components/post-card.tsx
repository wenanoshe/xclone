import Link from "next/link"
import {IconHeartCode, IconRepeat, IconMessageCircle} from '@tabler/icons-react'

interface Props  {
    userName: string,
    userFullName: string,
    avatarUrl: string,
    content: string
}

export default function PostCard({userName, userFullName, avatarUrl, content} :Props) {
  return (
	<div className="flex flex-col heigh-auto overflow-hidden heigh-auto bg-slate-900 rounded-xl shadow-md hover:bg-slate-800/30 cursor-pointer transition">
	
        <div className="flex p-3 items-center shrink-0 justify-between w-full">
            <div className="flex gap-5">
                <Link href={`/${userName}`} className="flex relative justify-center items-center border-2 border-slate-500 box-content rounded-full align-middle overflow-hidden w-10 h-10">
                    <img src={avatarUrl} className="flex object-cover w-full h-full" alt="avatar" data-loaded="true"/>
                </Link>
                <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-slate-200">{userFullName}</h4>
                    <h5 className="text-slate-400 text-sm">@{userName}</h5>
                </div>
            </div>
        </div>
        <div className="relative w-full p-3 px-3 text-sm text-slate-400 flex flex-col h-auto overflow-y-auto">
            <p>{content}</p>
        </div>
        <div className="flex items-center gap-3 p-3 text-sm text-slate-400">
            <button>
                <IconHeartCode className="h-4 h-4"/>
            </button>
            <button>
                <IconRepeat className="h-4 h-4"/>
            </button>
            <button>
                <IconMessageCircle className="h-4 h-4"/>
            </button>
            {/*<div className="flex gap-1">
                <p className="font-bold">0</p>
                <p className="">Following</p>
            </div>
            <div className="flex gap-1">
                <p className="font-bold">0</p>
                <p className="">Followers</p>
            </div>*/}

        </div>
	</div>
  )
}
