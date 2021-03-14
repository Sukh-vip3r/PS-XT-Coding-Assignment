export class Launch {
    flight_number: number;
    mission_name: string;
    mission_id: string[];
    upcoming: boolean;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    is_tentative: boolean;
    tentative_max_precision: string;
    tbd: boolean;
    launch_window?: number;
    rocket: Rocket;
    ships: string[];
    telemetry: Telemetry;
    launch_site: Launchsite;
    launch_success: boolean;
    launch_failure_details?: Launchfailuredetails;
    links: Links;
    details?: string;
    static_fire_date_utc?: string;
    static_fire_date_unix?: number;
    timeline?: Timeline;
    crew?: any;
    last_date_update?: string;
    last_ll_launch_date?: string;
    last_ll_update?: string;
    last_wiki_launch_date?: string;
    last_wiki_revision?: string;
    last_wiki_update?: string;
    launch_date_source?: string;
    missionFlightName?: string;

    constructor(payload: any) {
        Object.assign(this, payload);
        this.missionFlightName = `${payload.mission_name} #${payload.flight_number}`;
    }
}

interface Timeline {
    webcast_liftoff?: number;
    go_for_prop_loading?: number;
    rp1_loading?: number;
    stage1_lox_loading?: number;
    stage2_lox_loading?: number;
    engine_chill?: number;
    prelaunch_checks?: number;
    propellant_pressurization?: number;
    go_for_launch?: number;
    ignition?: number;
    liftoff?: number;
    maxq?: number;
    meco?: number;
    stage_sep?: number;
    second_stage_ignition?: number;
    'seco-1'?: number;
    dragon_separation?: number;
    dragon_solar_deploy?: number;
    dragon_bay_door_deploy?: number;
    fairing_deploy?: number;
    payload_deploy?: number;
    second_stage_restart?: number;
    'seco-2'?: number;
    webcast_launch?: number;
    payload_deploy_1?: number;
    payload_deploy_2?: number;
    first_stage_boostback_burn?: number;
    first_stage_entry_burn?: number;
    first_stage_landing?: number;
    beco?: number;
    side_core_sep?: number;
    side_core_boostback?: number;
    center_stage_sep?: number;
    center_core_boostback?: number;
    side_core_entry_burn?: number;
    center_core_entry_burn?: number;
    side_core_landing?: number;
    center_core_landing?: number;
    first_stage_landing_burn?: number;
    stage1_rp1_loading?: number;
    stage2_rp1_loading?: number;
    'seco-3'?: number;
    'seco-4'?: number;
}

interface Links {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign?: string;
    reddit_launch?: string;
    reddit_recovery?: string;
    reddit_media?: string;
    presskit?: string;
    article_link?: string;
    wikipedia?: string;
    video_link: string;
    youtube_id: string;
    flickr_images: string[];
}

interface Launchfailuredetails {
    time: number;
    altitude?: number;
    reason: string;
}

interface Launchsite {
    site_id: string;
    site_name: string;
    site_name_long: string;
}

interface Telemetry {
    flight_club?: string;
}

interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: Firststage;
    second_stage: Secondstage;
    fairings?: Fairing;
}

interface Fairing {
    reused?: boolean;
    recovery_attempt: boolean;
    recovered?: boolean;
    ship?: string;
}

interface Secondstage {
    block?: number;
    payloads: Payload[];
}

interface Payload {
    payload_id: string;
    norad_id: (number | number)[];
    reused: boolean;
    customers: string[];
    nationality?: string;
    manufacturer?: string;
    payload_type: string;
    payload_mass_kg?: number;
    payload_mass_lbs?: number;
    orbit: string;
    orbit_params: Orbitparams;
    cap_serial?: string;
    mass_returned_kg?: number;
    mass_returned_lbs?: number;
    flight_time_sec?: number;
    cargo_manifest?: string;
    uid?: string;
}

interface Orbitparams {
    reference_system?: string;
    regime?: string;
    longitude?: null | number | number;
    semi_major_axis_km?: null | number | number;
    eccentricity?: null | number | number;
    periapsis_km?: null | number | number;
    apoapsis_km?: null | number | number;
    inclination_deg?: null | number | number;
    period_min?: null | number | number;
    lifespan_years?: null | number | number;
    epoch?: null | string | string;
    mean_motion?: null | number | number;
    raan?: null | number | number;
    arg_of_pericenter?: number;
    mean_anomaly?: number;
}

interface Firststage {
    cores: Core[];
}

interface Core {
    core_serial: string;
    flight: number;
    block?: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    land_success?: boolean;
    landing_intent: boolean;
    landing_type?: string;
    landing_vehicle?: string;
}
