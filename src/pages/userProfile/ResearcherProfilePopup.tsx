import {
  Mail,
  Edit,
  Trash2,
  LogOut,
  Shield,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getMyProfile } from "../../services/rprofileService";

export const ResearcherProfilePopup = ({ close }: any) => {

  const [profile,setProfile] =useState<any>(null);

  const initials = profile?.fullName
                           ?.split(" ")
                           .map((name: any) => name[0])
                           .join("")
                           .toUpperCase()

   useEffect(()=>{
  
   const loadProfile = async()=>{
  
     const data =
      await getMyProfile();
  
     setProfile(data.data);
  
   }
  
  
   loadProfile();
  
  
  },[]);
  

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      justify-end
      bg-black/40
      backdrop-blur-md
      "
    >
      <div
        className="
        fixed
        inset-0
        z-50
        bg-black/20
        backdrop-blur-md
        "
        onClick={close}
      ></div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="
        fixed
        right-6
        top-20
        w-85
        bg-[#0B0F19]/90
        backdrop-blur-xl
        rounded-3xl
        p-6
        "
      ></div>

      {/* Popup */}

      <div
        className="
        w-85
        h-fit
        mt-20
        mr-6
        bg-[#0B0F19]/90
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        shadow-[0_0_50px_rgba(0,255,255,0.15)]
        p-6
        text-white
        animate-in
        slide-in-from-right
        duration-300
        "
      >
        {/* Profile Header */}

        <div className="flex flex-col items-center text-center">
          <div
            className="
            w-24
            h-24
            rounded-full
            bg-linear-to-br
            from-cyan-400
            to-purple-600
            flex
            items-center
            justify-center
            text-3xl
            font-bold
            shadow-lg
            "
          >
            {initials}
          </div>

          <h2 className="mt-4 text-xl font-bold">{profile?.fullName}</h2>

          <p
            className="
            text-cyan-400
            text-sm
            flex
            items-center
            gap-2
            mt-1
            "
          >
            <Shield size={15} />
             {profile?.role}
          </p>

          <div
            className="
            mt-3
            flex
            items-center
            gap-2
            text-slate-400
            text-sm
            "
          >
            <Mail size={15} />
            {profile?.email}
          </div>
        </div>

        <div
          className="
          h-px
          bg-white/10
          my-6
          "
        />

        <div className="space-y-3">
          <button
            className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-xl
            bg-white/5
            hover:bg-cyan-500/20
            transition
            "
          >
            <Edit size={18} />
            Edit Account
          </button>

          <button
            className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-xl
            bg-red-500/10
            hover:bg-red-500/20
            text-red-400
            transition
            "
          >
            <Trash2 size={18} />
            Delete Account
          </button>

          <button
            className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-xl
            bg-purple-500/10
            hover:bg-purple-500/20
            text-purple-300
            transition
            "
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>

        <p
          className="
          text-center
          text-xs
          text-slate-500
          mt-6
          "
        >
          DefenZo Researcher Account
        </p>
      </div>
    </div>
  );
}

export default ResearcherProfilePopup