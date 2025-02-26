import ProfileAppHistory from './ProfileAppHistory'

const ProfileTerapy = () => {
    return (
        <>
            {/* Tipo de terapia */}
            <article className="w-[343px] bg-background my-2 pb-2 px-6 gap-2 flex flex-col text-base rounded-2xl leading-tight">
                <h2 className="font-medium">Terapia</h2>
                <p className="text-[#969696]">
                    Terapia individual
                </p>

                <p className="self-end">-</p>
            </article>

            {/* Email */}
            <article className="w-[343px] bg-background my-2 pb-2 px-6 gap-2 flex flex-col text-base rounded-2xl leading-tight">
                <h2 className="font-medium">Email</h2>
                <p className="text-[#969696]">
                    miguelrojas@gmail.com
                </p>

                <p className="self-end">-</p>
            </article>

            {/* Historial de turnos */}
            <article className="w-[343px] bg-background my-2 pb-2 px-6 gap-2 flex flex-col text-base rounded-2xl leading-tight">
                <h2 className="font-medium">Historial de turnos</h2>
                <ProfileAppHistory />
                <ProfileAppHistory />
                <p className="self-end">-</p>
            </article>
        </>
    )
}

export default ProfileTerapy